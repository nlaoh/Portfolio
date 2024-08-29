import {Icon} from '@iconify/react';
import {FC, memo} from 'react';

import {SkillGroup as SkillGroupType} from '../../../data/dataDef';

export const SkillGroup: FC<{skillGroup: SkillGroupType}> = memo(({skillGroup}) => {
  const {name, skills} = skillGroup;
  return (
    <div className="flex flex-col">
      <span className="text-center text-lg font-bold">{name}</span>
      <div className="flex flex-wrap gap-4 justify-center">
        {skills.map((skill, index) => (
          <SkillIcon key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
});

SkillGroup.displayName = 'SkillGroup';

export const SkillIcon: FC<{skill: {name: string; icon: string}}> = memo(({skill}) => {
  const {name, icon} = skill;

  return (
    <div className="flex flex-col items-center">
      <Icon className="text-4xl" icon={icon} />
      <span className="mt-2 text-sm font-medium">{name}</span>
    </div>
  );
});

SkillIcon.displayName = 'SkillIcon';
