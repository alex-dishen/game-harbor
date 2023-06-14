import { useFileInput } from 'pages/AddGame/FileInput/useFileInput';
import { FileInputProps } from 'pages/AddGame/FileInput/types';
import { FileInputWrapper } from 'pages/AddGame/FileInput/styles';

const FileInput = ({}: FileInputProps) => {
  useFileInput();

  return <FileInputWrapper></FileInputWrapper>;
};

export default FileInput;
