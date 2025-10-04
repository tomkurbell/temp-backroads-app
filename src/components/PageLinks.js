import { pageLinks } from "../data";

const PageLinks = (params) => {
  const { parentClass, itemClass } = params;
  return (
    <ul className={`${parentClass}`} id={`${parentClass}`}>
        {pageLinks.map((link) => {
        return (
            <li key={link.id}>
            <a href={link.href} className={`${itemClass}`}> {link.text} </a>
            </li>
        );
        })}
    </ul>
  )
}

export default PageLinks
