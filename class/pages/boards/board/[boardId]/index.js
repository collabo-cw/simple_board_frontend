
import React from 'react';
import { useRouter } from 'next/router';

const BoardPage = () => {
  const router = useRouter();
  const { boardId } = router.query; 

  return <div>Displaying content for board {boardId}</div>;
};

export default BoardPage;
