import React from 'react';
import './Cloud.css'; // Cloudコンポーネントのスタイルをインポート

const Cloud = () => {
  return (
    <div className="cloud">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        className="cloud-svg"
      >
        <path
          d="M48 24c-1.1 0-2.1.1-3.1.3C43.2 22.1 41.2 20 38 20c-3.1 0-5.8 1.5-7.5 3.8C28.5 23.1 26.3 22 24 22c-5.5 0-10 4.5-10 10s4.5 10 10 10h20c5.5 0 10-4.5 10-10s-4.5-10-10-10z"
          fill="#fff"
        />
      </svg>
    </div>
  );
};

export default Cloud;