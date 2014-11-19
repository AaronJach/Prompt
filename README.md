Prompt - Increasing Onsite Conversion
======

Getting Started
======

Download either the <a href="">production version</a> or the <a href="">development version</a> of Prompt.

In your web page:
<code>
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
</code>

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

<code>
$(document).ready(function(){
	$(document).prompt({
		url:	'https://www.foremostmedia.com',
		height:	529,
		scroll: 200,
		width:	807
	});
});
</code>