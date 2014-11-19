Prompt - Increasing Onsite Conversion
======

Getting Started
======

Download either the <a href="https://github.com/AaronJach/Prompt/blob/master/src/jquery.prompt.min.js">production version</a> or the <a href="https://github.com/AaronJach/Prompt/blob/master/src/jquery.prompt.js">development version</a> of Prompt.

In your web page:
```
	<!-- include Prompt Styles-->
	<link rel="stylesheet" type="text/css" href="http://pathto/jquery.prompt.min.css">
	<!-- include jQuery -->
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.js"></script>
	<!-- include Prompt Script-->
	<script src="http://pathto/jquery.prompt.min.js"></script>

	<!-- Initialize Prompt -->
	<script type="text/javascript">
		$(document).ready(function(){
			$(document).prompt();
		});
	</script>
```

Customizing Options
======

<table width="100%">
	<tr>
		<th with="200px;">Option</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>url</td>
		<td>The url to be iframed in *recommended to link to a newsletter signup</td>
	</tr>
	<tr>
		<td>className</td>
		<td>changes the wrapper class, allowing you to style withou interference</td>
	</tr>
	<tr>
		<td>height</td>
		<td>height of the pop-up</td>
	</tr>
	<tr>
		<td>width</td>
		<td>width of the pop-up</td>
	</tr>
	<tr>
		<td>scroll</td>
		<td>minimum depth user has to scroll to initiate</td>
	</tr>
</table>

Example
======

```
$(document).ready(function(){<br>
	$(document).prompt({<br>
		url:	'https://www.foremostmedia.com',<br>
		height:	529,<br>
		scroll: 200,<br>
		width:	807<br>
	});<br>
});
```