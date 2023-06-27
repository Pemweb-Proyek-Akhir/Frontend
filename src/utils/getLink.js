export default function getLink(link) {
  if (link.includes("localhost")) {
    return `http://${link}`;
  } else {
    return link;
  }
}
