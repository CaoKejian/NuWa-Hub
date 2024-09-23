import { v4 as uuidv4 } from 'uuid';

export const uuid = (length = 6) => {
  const uuid = uuidv4();
  const uuidWithoutDashes = uuid.replace(/-/g, '');

  let id = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * uuidWithoutDashes.length);
    id += uuidWithoutDashes[randomIndex];
  }

  return id;
};
