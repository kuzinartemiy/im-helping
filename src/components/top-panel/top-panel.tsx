import style from './top-panel.module.scss';

import { ReactComponent as DefaultFilterImage } from '../../assets/icons/filter.svg';

const defaultPrimaryColor = '#2e3192;';

type TTopPanel = {
  titleText:
  | 'Активные заявки'
  | 'Завершенные заявки'
  | 'Статистика'
  | 'Подтверждение / Блокировка'
  | 'Создание / Редактирование заявки'
  | 'Контакты'
  | 'Напишите нам'
  | 'Карта заявок'
  | string
  titleImage: React.ReactNode
  titleImageStyle?: string
  onFilterClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => any
  filterText?: string
  filterImage?: React.ReactNode
  filterImageStyle?: string
} & React.HTMLProps<HTMLDivElement>;

export const TopPanel = ({
  titleText,
  titleImage,
  titleImageStyle = style.title_image,
  onFilterClick,
  filterText = 'Фильтр',
  filterImage = <DefaultFilterImage fill={defaultPrimaryColor} />,
  filterImageStyle = style.filter_image,
  ...rest
}: TTopPanel) => {
  return (
    <div className={style.wrapper} {...rest}>
      <div className={style.title}>
        <div className={titleImageStyle}>{titleImage}</div>
        <h2 className={style.title_text}>{titleText}</h2>
      </div>
      <div className={style.filter} onClick={onFilterClick}>
        <span className={style.filter_text}>{filterText}</span>
        <div className={filterImageStyle}>{filterImage}</div>
      </div>
    </div>
  );
};
