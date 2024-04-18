interface TableEmptyRowsProps {
  emptyRows?: number;
  height?: number;
}
interface TableNoDataProps {
  query: string;
}
interface HeadCell {
  id: string;
  label?: string;
  align?: "left" | "center" | "right";
  width?: number;
  minWidth?: number;
}

interface UserTableHeadProps {
  order: "asc" | "desc";
  orderBy: string;
  rowCount: number;
  headLabel: HeadCell[];
  numSelected: number;
  onRequestSort: (event: React.MouseEvent, property: string) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
interface UserTableRowProps {
  selected: any;
  name: any;
  avatarUrl: any;
  company: any;
  role: any;
  isVerified: any;
  status: string;
  handleClick: any;
}
interface UserTableToolbarProps {
  numSelected: number;
  filterName: string;
  onFilterName: any;
}
