export const openProfileTab = (gh, fb, onObject) => {
  if (onObject.object.uuid === gh.current.uuid)
    window.open('https://github.com/quanghuybest2k2', 'new');
  if (onObject.object.uuid === fb.current.uuid)
    window.open('https://web.facebook.com/quanghuybest2k2', 'new');
};

export const openProjectTab = (sf, iic, chat, museum, ttt, onObject) => {
  if (onObject.object.uuid === sf.current.uuid)
    window.open('https://social-freaks.vercel.app/', 'new');
  if (onObject.object.uuid === iic.current.uuid)
    window.open('https://iicdcrustm.com/home/', 'new');
  if (onObject.object.uuid === chat.current.uuid)
    window.open('https://whats-clone-1c76b.web.app/', 'new');
  if (onObject.object.uuid === museum.current.uuid)
    window.open('https://museum-counsel.herokuapp.com/', 'new');
  if (onObject.object.uuid === ttt.current.uuid)
    window.open('https://tic-tac-toe-7fcb8.web.app/', 'new');
};

export const openProjectGithub = (sf, iic, chat, museum, ttt, onObject) => {
  if (onObject.object.uuid === sf.current.uuid)
    window.open('https://github.com/VinayMatta63/Social-Freaks', 'new');
  if (onObject.object.uuid === iic.current.uuid)
    window.open('https://github.com/VinayMatta63/web', 'new');
  if (onObject.object.uuid === chat.current.uuid)
    window.open('https://github.com/VinayMatta63/Chat-App', 'new');
  if (onObject.object.uuid === museum.current.uuid)
    window.open('https://github.com/VinayMatta63/Museum-Counsel', 'new');
  if (onObject.object.uuid === ttt.current.uuid)
    window.open(
      'https://github.com/VinayMatta63/tic-tac-toe-multipayer',
      'new',
    );
};
