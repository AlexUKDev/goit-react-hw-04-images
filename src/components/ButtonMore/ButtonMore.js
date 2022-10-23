import { GiClaymoreExplosive } from 'react-icons/gi';
// import { MdExpandMore } from 'react-icons/md';

export const ButtonMore = ({ onClick }) => {
  return (
    <div className="ButtonMoreWrap">
      <button type="button" className="ButtonMore" onClick={onClick}>
        <GiClaymoreExplosive className="moreIcon beforeText" />
        Load more
        <GiClaymoreExplosive className="moreIcon afterText" />
      </button>
    </div>
  );
};
