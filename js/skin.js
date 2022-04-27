// Skin specific Javascript
if ("scImageMgr" in window) scImageMgr.fOverAlpha=.9;


// const menuLabelsElementss = document.querySelectorAll(".default #menu .mnu .lbl")
const menuLabelsElementss = document.querySelectorAll(".default #menu .mnu .item")

let menuLabelsElements = [...menuLabelsElementss]


// Adds and removes the text color when hovering on every menu item's div
menuLabelsElements.forEach(menuLabelEl => {
	menuLabelEl.addEventListener('mouseenter', (e) => {
		console.log(menuLabelEl.innerText)
		console.log("mouseenter over a label element")
		const childrenList = e.target.children
		console.log(childrenList)
		const spanChild = childrenList[childrenList.length - 1]
		console.log("Span child: " + spanChild)

		spanChild.style.color = "white"

	})
})

menuLabelsElements.forEach(menuLabelEl => {
	menuLabelEl.addEventListener('mouseleave', (e) => {
		const childrenList = e.target.children

		const spanChild = childrenList[childrenList.length - 1]

		const selectedParent = spanChild.parentElement.parentElement.parentElement

		const isParentActive = selectedParent.classList.contains("sel_yes")
		
		// Only re-sets the text color to dark if the menu item is not currently active
		if (!isParentActive) {
		spanChild.style.color = "var(--text-color)"
		}
	})
})