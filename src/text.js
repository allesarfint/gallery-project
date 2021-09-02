import './css/textcontent.css';

const text = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas elit a ligula condimentum, vitae ultrices enim venenatis. Curabitur sit amet elementum lorem, in lobortis purus. Donec turpis nibh, imperdiet et tellus sit amet, euismod euismod sem. Praesent nunc erat, ornare sed malesuada et, varius quis arcu. Vivamus urna lacus, interdum at lacus quis, finibus vehicula dolor. In consectetur accumsan blandit. Sed id turpis vitae eros feugiat aliquam id nec massa. Sed vitae faucibus justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque bibendum gravida neque.

Curabitur aliquet sed justo nec pharetra. Vivamus vitae erat ac nibh consequat imperdiet non condimentum felis. Etiam eu sollicitudin nulla. Nam mollis facilisis mi, id eleifend enim faucibus placerat. Suspendisse velit purus, pellentesque et lacus molestie, hendrerit suscipit nulla. Vivamus purus urna, interdum ut sodales et, facilisis vel mi. Etiam lacinia porttitor imperdiet. Quisque gravida elit eu purus lobortis tempus. Sed sit amet lacus tristique mauris efficitur faucibus sed eget lorem. Cras sit amet lectus in leo scelerisque convallis. Curabitur sed lacus non ligula aliquam eleifend sed a purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse sed vulputate enim. Vivamus sit amet egestas arcu. Morbi nulla felis, suscipit cursus nisi ac, sodales mollis ligula. Praesent congue molestie molestie.

Duis magna lectus, blandit vel erat eget, molestie pulvinar nunc. Sed aliquam ultricies nulla, eget consequat tellus porta vel. Curabitur quam nulla, facilisis vitae est vitae, finibus consectetur lorem. Proin viverra massa non est pretium ornare. Nullam sit amet felis eget tellus bibendum tincidunt et quis leo. Ut porta at nisi vitae scelerisque. Nam a quam malesuada, tempor risus eu, iaculis est.

Morbi hendrerit sagittis tempus. Praesent tempus ligula sit amet velit euismod, mollis consequat dui mattis. Nullam id feugiat urna. Phasellus vel egestas libero. Sed et placerat odio. Cras pulvinar vehicula arcu, sed blandit ipsum laoreet eget. Nullam maximus, odio ac sollicitudin pretium, mauris erat viverra arcu, non gravida odio felis fringilla nibh.

Proin in velit vehicula, tempor metus et, sodales lectus. Integer eget ante ac lorem auctor sagittis. Donec nulla nisi, dictum vel metus ac, accumsan vulputate massa. Proin vel consectetur lacus, quis viverra ante. Vivamus in felis a erat luctus vehicula. Mauris et massa sed elit mattis tempus. Mauris odio sapien, tempor eu venenatis a, interdum sed velit.
`;

export function textContent() {
    const textContainer = document.createElement("article");
    textContainer.id = "text-container";
    textContainer.textContent = text;

    return textContainer
}