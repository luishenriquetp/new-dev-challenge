import * as Style from './Title'

interface TitleProps {
    title: string | undefined;
  }

const Title: React.FC<TitleProps> = ({title}) => {
    return (
        <Style.Title>{title}</Style.Title>
    );
}

export default Title;