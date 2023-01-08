import type { IOptionsColor } from "../../IOptionsColor";

/**
 * @category Options
 */
export interface IMoveTrail {
    enable: boolean;
    fillColor: string | IOptionsColor;
    fillImageSrc?: string;
    length: number;
}
