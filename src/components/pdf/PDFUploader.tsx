import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, FileText, X } from 'lucide-react';

interface UploadedFile {
  file: File;
  progress: number;
  status: 'uploading' | 'analyzing' | 'complete' | 'error';
  analysis?: string;
}

export function PDFUploader() {
  const [files, setFiles] = useState<UploadedFile[]>([]);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const newFiles = acceptedFiles.map(file => ({
      file,
      progress: 0,
      status: 'uploading' as const,
    }));

    setFiles(prev => [...prev, ...newFiles]);

    for (const fileData of newFiles) {
      try {
        // Simulate upload progress
        for (let progress = 0; progress <= 100; progress += 10) {
          await new Promise(resolve => setTimeout(resolve, 200));
          setFiles(prev =>
            prev.map(f =>
              f.file === fileData.file ? { ...f, progress } : f
            )
          );
        }

        // Upload file to server
        const formData = new FormData();
        formData.append('file', fileData.file);

        const response = await fetch('/api/upload-pdf', {
          method: 'POST',
          body: formData,
        });

        const data = await response.json();

        setFiles(prev =>
          prev.map(f =>
            f.file === fileData.file
              ? { ...f, status: 'complete', analysis: data.analysis }
              : f
          )
        );
      } catch (error) {
        console.error('Error uploading file:', error);
        setFiles(prev =>
          prev.map(f =>
            f.file === fileData.file ? { ...f, status: 'error' } : f
          )
        );
      }
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
    },
    maxSize: 10485760, // 10MB
  });

  const removeFile = (file: File) => {
    setFiles(prev => prev.filter(f => f.file !== file));
  };

  return (
    <div className="space-y-6">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-8 text-center ${
          isDragActive ? 'border-amber-500 bg-amber-50' : 'border-gray-300'
        }`}
      >
        <input {...getInputProps()} />
        <Upload className="mx-auto h-12 w-12 text-gray-400" />
        <p className="mt-2 text-sm text-gray-600">
          Drag and drop PDF files here, or click to select files
        </p>
        <p className="text-xs text-gray-500">Maximum file size: 10MB</p>
      </div>

      {files.length > 0 && (
        <div className="space-y-4">
          {files.map((fileData) => (
            <div
              key={fileData.file.name}
              className="bg-white rounded-lg shadow p-4"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <FileText className="h-6 w-6 text-amber-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {fileData.file.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {(fileData.file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => removeFile(fileData.file)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-4">
                <div className="relative pt-1">
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-100">
                    <div
                      style={{ width: `${fileData.progress}%` }}
                      className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${
                        fileData.status === 'error'
                          ? 'bg-red-500'
                          : 'bg-amber-500'
                      }`}
                    />
                  </div>
                </div>
                <p className="mt-2 text-xs text-gray-500">
                  {fileData.status === 'uploading' && 'Uploading...'}
                  {fileData.status === 'analyzing' && 'Analyzing PDF...'}
                  {fileData.status === 'complete' && 'Upload complete'}
                  {fileData.status === 'error' && 'Error uploading file'}
                </p>
              </div>

              {fileData.analysis && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <h4 className="text-sm font-medium text-gray-900">Analysis</h4>
                  <p className="mt-1 text-sm text-gray-600">{fileData.analysis}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}