import React, { useState } from 'react';
import PreviewModal from './PreviewModal';

function RegisterForm() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [category, setCategory] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handlePreview = () => {
    const previewWindow = window.open('', '_blank', 'width=700,height=600');

    const html = `
    <html>
      <head>
        <title>클래스 미리보기</title>
        <style>
          * {
            box-sizing: border-box;
          }
          body {
            margin: 0;
            padding: 0;
            font-family: 'Pretendard', sans-serif;
            background: #f0f4f8;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }
          .preview-box {
            background: white;
            padding: 2rem;
            border-radius: 16px;
            box-shadow: 0 8px 24px rgba(0,0,0,0.1);
            width: 100%;
            max-width: 600px;
          }
          h1 {
            font-size: 24px;
            color: #4F46E5;
            margin-bottom: 0.5rem;
          }
          .section {
            margin-top: 1rem;
          }
          .label {
            font-size: 0.9rem;
            color: #6B7280;
            margin-bottom: 0.25rem;
          }
          .value {
            font-size: 1rem;
            color: #111827;
          }
        </style>
      </head>
      <body>
        <div class="preview-box">
          <h1>${title || '제목 없음'}</h1>
          <div class="section">
            <div class="label">설명</div>
            <div class="value">${desc || '설명이 없습니다.'}</div>
          </div>
          <div class="section">
            <div class="label">카테고리</div>
            <div class="value">${category || '선택되지 않음'}</div>
          </div>
        </div>
      </body>
    </html>
  `;

    previewWindow.document.write(html);
    previewWindow.document.close();
  };

  const previewData = {
    title,
    desc,
    category
  };

  return (
    <div className="bg-white max-w-xl mx-auto shadow-xl rounded-2xl p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">📚 클래스 등록</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">클래스 제목</label>
          <input
            type="text"
            className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="예: 리액트 마스터 클래스"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">설명</label>
          <textarea
            className="w-full border px-4 py-2 rounded-lg resize-none h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="클래스에 대한 간단한 설명을 입력하세요"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">카테고리</label>
          <select
            className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">-- 선택하세요 --</option>
            <option value="프로그래밍">프로그래밍</option>
            <option value="디자인">디자인</option>
            <option value="자기계발">자기계발</option>
          </select>
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <button
            onClick={handlePreview}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            미리보기
          </button>
        </div>
      </div>

      <PreviewModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        data={previewData}
      />
    </div>
  );
}

export default RegisterForm;