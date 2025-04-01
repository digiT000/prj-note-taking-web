import React from 'react';
import MenuItem from '@/components/navigation/MenuItem';
import { Tag } from 'lucide-react';
import style from '../typhography/Typography.module.css';

const Tags = ['Cooking', 'Dev', 'Health'];
interface TagListProps {
  currentPath: string;
}

function TagList({ currentPath }: TagListProps) {
  // const {} = useFetchData();
  // const [tags, setTags] = useState([]);
  //
  // function fetchTags() {
  //   try {
  //   } catch (e) {}
  // }
  //
  // useEffect(() => {});
  return (
    <>
      <h3 className={`px-3 text-neutral-500 ${style.textPreset_4} mb-`}>
        Tags
      </h3>
      {/*POTENTIAL COMPONENT LIST*/}
      <div className={'flex flex-col gap-1'}>
        {Tags.map((tag) => (
          <MenuItem
            isSelected={currentPath.toLowerCase() === tag.toLowerCase()}
            label={tag}
            icon={Tag}
            key={tag}
            to={`/tags/${tag.toLowerCase()}`}
          />
        ))}
      </div>
    </>
  );
}

export default TagList;
