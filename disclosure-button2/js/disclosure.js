function init()
{
	document.getElementById("button").addEventListener("click", toggleDisclosure);
	document.getElementById("button").addEventListener("keydown", toggleDisclosure);
}

function toggleDisclosure(event)
{
	var type = event.type;
	var button = document.getElementById("button");
	var content = document.getElementById("content");

	if (type === "keydown" && (event.keyCode !== 13 && event.keyCode !== 32))
	{
		return true
	}

    if(content.getAttribute("aria-hidden") == "true")
	{
		content.setAttribute("aria-hidden", "false");
		button.setAttribute("aria-expanded", "true");
	}
	else
	{
		content.setAttribute("aria-hidden", "true");
		button.setAttribute("aria-expanded", "false");
	}

	event.preventDefault();
}

window.onload = init;