export function scrollElement(element: Element, scrollY: number) {
    // if (element.clientHeight > window.innerHeight) {
    element.scroll({
        top: (scrollY * 2) / 3,
        behavior: "smooth",
    });
    // }
}
