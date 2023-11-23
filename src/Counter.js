import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

import MailIcon from '@mui/icons-material/Mail';

export function Counter() {
  let [like, setLike] = useState(0);
  let [dislike, setdisLike] = useState(0);

  const incrementLike = () => setLike(like + 1);
  const incrementDisLike = () => setdisLike(dislike + 1)
  return (
    <div>
      <IconButton aria-label="delete" color="secondary" onClick={incrementLike}>
        <Badge badgeContent={like} color="secondary">
          ❤️
        </Badge>
      </IconButton>
      <IconButton aria-label="delete" color="secondary" onClick={incrementDisLike}>
        <Badge badgeContent={dislike} color="error">
          💔
        </Badge>
      </IconButton>


    </div>
  );
}
