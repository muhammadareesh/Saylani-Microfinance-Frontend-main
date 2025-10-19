import React, { useState } from "react";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) setFile(selectedFile);
  };

  const handleUpload = async () => {
    if (!file) return;
    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("http://localhost:5000/api/gemini/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setResponse(data.success ? data.data : { error: data.error });
    } catch (err) {
      console.error(err);
      setResponse({ error: "Upload failed" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">
        Upload your file
      </h2>

      <label
        htmlFor="file-upload"
        className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-indigo-500 hover:bg-indigo-50 transition-colors"
      >
        <span className="text-gray-500">
          {file ? file.name : "Click or drag file to upload (PDF, DOCX, Images)"}
        </span>
        <input
          id="file-upload"
          type="file"
          className="hidden"
          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
          onChange={handleFileChange}
        />
      </label>

      <button
        onClick={handleUpload}
        disabled={loading}
        className="mt-5 w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold transition-colors disabled:opacity-50"
      >
        {loading ? "Uploading..." : "Upload & Get Help"}
      </button>

      {response && (
        <div className="mt-5 p-4 bg-gray-50 border border-gray-200 rounded-lg">
          <h3 className="font-semibold mb-2">Gemini Response:</h3>
          <pre className="text-sm text-gray-700 overflow-x-auto">
            {JSON.stringify(response, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
