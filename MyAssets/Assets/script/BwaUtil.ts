export class BwaUtil {

    static AdjustClass(element: HTMLElement, classNames: string) {
        let classArray: (string)[] = [];
        let addClass: boolean = true;

        const adjust = () => {
            if (classArray.length) {
                classArray.forEach(item => addClass ? element.classList.add(item) : element.classList.remove(item));
                classArray = [];
            }
        }

        for (let className of classNames.split(" ")) {
            if (className && className.length > 0) {
                let isRemove = className[0] == '-'
                if (isRemove || className[0] == '+') {
                    className = className.slice(1);
                }

                if (!isRemove != addClass) {
                    adjust();
                    addClass = !isRemove;
                }
                classArray.push(className);
            }
        }
        adjust();
    }

    public AdjustClass(element: HTMLElement, classNames: string) {
        BwaUtil.AdjustClass(element, classNames);
    }
}
(window as any).BwaUtil = new BwaUtil();  
