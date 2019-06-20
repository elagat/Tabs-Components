
class TabLink {
  constructor(element) {
    // Assign this.element to the passed in DOM element
    this.element = element;

    // Get the custom data attribute on the Link
    /* This should just get the first instance of the tab data attribute,
    but I wonder if I would otherwise need to specify the string of '1',
    or if I need them all? */
    /* this.element.dataset.tab vs. element.dataset.tab? */
    this.data = element.dataset.tab;

    // Using the custom data attribute get the associated Item element
    /* I think the item element is the string '1' through '4' */
    this.itemElement = this.element.dataset.tab ;

    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem;

    // Add a click event listener on this instance, calling the select method on click
    /* Syntax: any third boolean parameter required? */
    TabItem.addEventListener('click', select());
  };

  select() {
    // Get all of the elements with the tabs-link class
    const links = document.querySelectorAll('.tabs-link');

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    /* Does this need to be an array? Wouldn't it be easier to use .remove() on the NodeList?*/
    links.classList.remove('tabs-link-selected');

    // Add a class named "tabs-link-selected" to this link
    this.element.add('tabs-link-selected');

    // Call the select method on the item associated with this link
    this.element.select();
  }
}

class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
    this.element = element;
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    const items = document.querySelectorAll('.tabs-item');

    // Remove the class "tabs-item-selected" from each element
    items.classList.remove('tabs-item-selected');

    // Add a class named "tabs-item-selected" to this element
    this.element.add('tabs-item-selected');
  }
}

/* START HERE:

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

let links = document.querySelectorAll('.tabs-link').forEach(link => new TabLink(link));
