
<?php

error_reporting(E_ALL);
ini_set("display_errors", 1);

// Connecting, selecting database
$link = mysql_connect('localhost', 'root', 'xxxxxxxx')
    or die('Could not connect: ' . mysql_error());
mysql_select_db('SetLists') or die('Could not select database');

// Performing SQL query
$query = 'SELECT * FROM SetLists WHERE ShowId = ' . $_REQUEST['showid'];
$result = mysql_query($query) or die('Query failed: ' . mysql_error());
$strout = '';

$num=mysql_numrows($result);
$i = 0;
while ($i < $num)
{
	
	$SongTitle=mysql_result($result,$i,"SongTitle");
	$BandName=mysql_result($result,$i,"BandName");

	$strout .= '<b>' . $SongTitle . "</b> : " . $BandName . "<br>";

	$showid = mysql_result($result,$i,"ShowId");
	$i++;

}

// Free resultset
mysql_free_result($result);

// Closing connection
mysql_close($link);
echo '<p class=""subhead"">episode ' . $showid . '</p>';
echo $strout;


?>

<p class="small" style="text-align:right;"><a href="javascript:hideObject();">(close)</a></p>
