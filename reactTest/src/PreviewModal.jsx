import React from 'react';

function PreviewModal({ isOpen, onClose, data }) {
  if (!isOpen) return null;

  const { title, desc, category } = data;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-lg p-6 rounded-2xl shadow-2xl relative animate-fadeIn">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
          onClick={onClose}
        >
          ×
        </button>

        <h3 className="text-xl font-bold mb-4 text-gray-800">📋 클래스 미리보기</h3>

        <div className="space-y-2">
          <div>
            <span className="text-gray-500 text-sm">제목</span>
            <p className="text-lg font-semibold text-gray-900">{title}</p>
          </div>

          <div>
            <span className="text-gray-500 text-sm">설명</span>
            <p className="text-gray-700 whitespace-pre-line">{desc}</p>
          </div>

          {category && (
            <div>
              <span className="text-gray-500 text-sm">카테고리</span>
              <p className="text-gray-800">{category}</p>
            </div>
          )}
        </div>

        <div className="flex justify-end mt-6">
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}

export default PreviewModal;