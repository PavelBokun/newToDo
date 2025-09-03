import Button from "@mui/material/Button";
type Props = {
  title: string
  onClick?: () => void
  className?: string
}
   
  export const Button1 = ({title,onClick,className }: Props) => {
    return <Button className={className} onClick={onClick} >{ title}</Button>
  }
