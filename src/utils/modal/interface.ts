type Color = string;
type SelectedColor = string | string[];

export interface ColorPickerProps {
colors: Color[];
selected: SelectedColor;
onSelectColor: (color: SelectedColor) => void;
limit?: number | 'auto';
sx?: Record<string, undefined>;
[otherProps: string]: unknown;
}

export interface ColorPreviewProps {
colors: string[];
limit?: number;
sx?: React.CSSProperties;
}
interface IBackGround {
paper: string;
}
interface IPlatte {
background: IBackGround
}
interface ICustomShadows {
dropdown: string
}
interface IShape {
borderRadius: number
}

interface ITheme {
palette: IPlatte;
direction: string;
background: string;
customShadows: ICustomShadows;
spacing: any;
shape: IShape;
}
export interface IPaperProps {
theme: ITheme;
bgcolor?: string;
dropdown?: boolean;
}
type Product = {
name: string;
cover: string;
status?: string;
price: number;
priceSale?: number;
colors: string[];
}

export interface IProduct {
product: Product
}