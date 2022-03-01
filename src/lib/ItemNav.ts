import { sortBy } from "lodash";

export class ItemNav {
  itemList: IItem[];
  selectedItem: IItem;

  private constructor(itemList: IItem[], selectedItem: IItem) {
    // sort
    this.itemList = sortBy(itemList, "order");
    this.selectedItem = selectedItem;
  }

  getNextItem(): IItem | undefined {
    let rv;
    if (this.selectedItem) {
      const index = this.itemList.indexOf(this.selectedItem);
      rv = this.itemList[index + 1];
    }
    return rv;
  }

  getPreviousItem(): IItem | undefined {
    let rv;
    if (this.selectedItem) {
      const index = this.itemList.indexOf(this.selectedItem);
      rv = this.itemList[index - 1];
    }
    return rv;
  }

  static factory(itemList: IItem[], selectedItem: IItem): ItemNav {
    return new ItemNav(itemList, selectedItem);
  }
}
