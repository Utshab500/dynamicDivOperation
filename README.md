# Dynamic Div Operation
A small simple dedicated plugin which helps to work with dynamic &lt;div> content

This code is focused on the <code>.mother</code> <code>.child</code> class. We often need to add dynamic form for users to input data.

So I have build a simple plugin which follows a simple <b>tree</b> structure here <code>.mother</code> is the root node and <code>.child</code> are the leaf node. So on clicking <b>add(green)</b> button it replicates the <code>.child</code> content and append inside <code>.mother</code>.

It also handles the serial number on addition and deletion.

Apart from that this simple plugin also fetches the all data from all <code>.child</code> nodes and wrap up inside <b>array</b> then it can be encoded in <b>json</b> and passed Http Requests.

