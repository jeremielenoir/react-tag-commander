import React from "react";

const Home = () => {
  return (
   <div>
      <h1>react-tag-commander Sample application</h1>
      <h2>The loading and configuration</h2>
      <h3>The main application configuration</h3>
      <pre>
        <code className="keyword">import</code> <code className="varible">TC_Wrapper</code> <code className="keyword">from</code> <code className="string">'react-tag-commander'</code>;<br />
        <code className="keyword">const</code> <code className="varible">wrapper</code> = <code className="varible">TC_Wrapper</code>.<code className="method">getInstance</code>();<br />
        <br />
        <code className="comment">{'// you need to provide URIS to load containers script. You can add as many container as you like'}</code><br />
        <code className="comment">{'// addContainer (id, uri, node)'}</code><br />
        <code class="varible">wrapper</code>.<code class="method">addContainer</code>(<code class="string">'a_name_for_the_container_id'</code>, <code class="string">'/the/path/to/tag-commander-container.js'</code>, <code class="string" >'head'</code>);<br />
        <br />
        <code class="comment">{'// but you can also remove them'}</code><br />
        <code class="varible">wrapper</code>.<code class="method">removeContainer</code>(<code class="string">'my_tag_container_id'</code>);<br />
        <br />
        <code class="comment">{'// you can set debug by setting this to true'}</code><br />
        <code class="varible">wrapper</code>.<code class="method">setDebug</code>(<code class="keyword">true</code>);<br />
        <br />
        <code class="comment">{'// you can track the url of your app by setting this, it will reload the containers on each page change'}</code><br />
        <code class="varible">wrapper</code>.<code class="method">trackRoutes</code>(<code class="keyword">true</code>);<br />
      </pre>

      <p>
          In the provider's method 'addContainer', The "node" parameter can either be set to 'body' or 'head', by default the container will be placed in the head.
      </p>

      <h3>The routes configuration</h3>
      <p>
        If you have set wrapper.trackRoutes(true); in your application configuration, 
        you can configure witch container will be reloaded on witch route, else what you need to do it in your controller.
        the containers will be reloaded after the controller has been executed,
        but if you change or set a varible in your controller methode you will need to call wrapper.reloadAllContainers(options)
        to propagate the changes to your containers.
      </p>
      
      <p>
        If you don't set the TagCommanderProvider.trackRoutes(true); (or you set it to false) you will have to reload your container manually
      </p>
      <pre>
        <code class="comment">{'// reload a specifique container'}</code><br />
        <code class="varible">wrapper</code>.<code class="method">reloadContainer</code>(<code class="varible">ids</code>, <code class="varible">idc</code>, <code class="varible">options</code>);<br />
        <br />
        <code class="comment">{'// or you can reload all the containers'}</code><br />
        <code class="varible">wrapper</code>.<code class="method">reloadAllContainers</code>(<code class="varible">options</code>);<br />
      </pre>

      <h2>How to set your Vars</h2>
      <h3>In a component</h3>
      <p>
          The setVar call allows to set your tc_vars.
      </p>
      <pre>
      <code className="varible">wrapper</code>.<code className="method">setTcVars</code>({'{'}<br />
        &nbsp;&nbsp;&nbsp;&nbsp;<code className="varible">env_template</code> : <code className="string">"shop"</code>,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;<code className="varible">env_work</code> : <code className="string">"dev"</code>,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;<code className="varible">env_language</code> : <code className="string">"en"</code>,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;<code className="varible">user_id</code> : <code className="string">"124"</code>,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;<code className="varible">user_logged</code> : <code className="string">"true"</code>,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;<code className="varible">user_age</code>: <code className="string">"32"</code>,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;<code className="varible">user_newcustomer</code> : <code className="string">"false"</code><br />
      <code>{'}'});</code><br />
      <br />
      <code className="comment">{'// you can also override some varible'}</code><br />
      <code className="keyword">if</code> (<code className="varible">isNewUser</code>) {'{'}<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<code className="varible">wrapper</code>.<code className="method">setTcVars</code>({'{'}<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code className="varible">user_newcustomer</code> : <code className="string">"true"</code><br />
      <code>{'}'});</code><br />
      <br />
      <code className="comment">{'// or set/update them individualy'}</code><br />
      <code className="varible">wrapper</code>.<code className="method">setTcVar</code>(<code className="string">'env_template'</code>, <code className="string">'super_shop'</code>);<br />
      <br />
      <code className="comment">{'// you can also remove a var'}</code><br />
      <code className="varible">wrapper</code>.<code className="method">removeTcVars</code>(<code className="string">'env_template'</code>);<br />
      </pre>

      <h3>In render function(JSX)</h3>
      <p>
        You can set your tc_vars with the TcVars Component
      </p>
      <pre>
        &lt;<code className="keyword">TcVars</code> <code className="method">env_language</code>=<code className="string">"fr"</code> <code className="method">env_template</code>=<code className="string">"super_shop"</code> /&gt;
 




{/* <code class="comment">// other exemples</code>
&lt;<code class="keyword">template</code> <code class="varible">class</code>=<code class="string">"sm-button green-500"</code> <code class="varible">tc-set-vars</code>=<code class="string">'{"env_language": $ctrl.default_language}'</code>&gt&lt;/<code class="keyword">template</code>&gt
&lt;<code class="keyword">div</code> <code class="varible">class</code>=<code class="string">"sm-button green-500"</code> <code class="varible">tc-set-vars</code>=<code class="string">'{"env_language": $scope.default_language}'</code>&gt&lt;/<code class="keyword">div</code>&gt */}
</pre>
<p>
    You need to provide the key of your var and it's value. The object provided have to be a JSON between single quote. You can also use your $ctrl and $scope vars, but you do not need to surround them with double quote.
</p>

<h2>How to get your Vars</h2>
<h3>In your controller</h3>
<pre>
<code className="keyword">var</code> <code className="varible">myVar</code> = <code className="varible">TagCommander</code>.<code className="method">getTcVar</code>(<code class="string">'VarKey'</code>);
</pre>

<h2>How to remove a Var</h2>
<p>
    In your component
</p>
<pre>
<code className="varible">wrapper</code>.<code className="method">removeTcVars</code>(<code className="string">'env_template'</code>);
</pre>

<h2>How to capture an Event</h2>
<h3>In your component</h3>
<pre>
    <code className="keyword">import</code> <code className="varible">React</code> <code className="keyword">from</code> <code className="string">'react'</code>;<br />
    <code className="keyword">import</code> <code className="varible">TC_Wrapper</code> <code className="keyword">from</code> <code className="string">'react-tag-commander'</code>;<br />
    <br />
    <code className="keyword">class</code> <code className="varible">Pannier</code> <code className="keyword">extends</code> <code className="varible">React.Component</code> {'{'}
    <br /><br />
    &nbsp;&nbsp;<code className="method">constructor</code>(<code className="varible">props</code>) {'{'}<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<code className="method">super</code>(<code className="varible">props</code>);<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<code className="varible">this.wrapper</code> = <code className="varible">TC_Wrapper</code>.<code className="method">getInstance()</code>;<br />
    &nbsp;&nbsp;{'}'}<br />
    &nbsp;&nbsp;<code className="method">handleAddQuantityItem</code> = (<code className="varible">index</code>, <code className="varible">event</code>, <code className="varible">data</code>) => {'{'}<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<code className="varible">this.wrapper</code>.<code className="method">captureEvent(</code><code className="string">'add_to_cart'</code>, <code className="varible">event.currentTarget</code>, <code className="varible">data</code>);<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<code className="varible">this.props</code>.<code className="method">addQuantityItem(</code><code className="varible">index</code><code className="method">)</code>;<br />
    &nbsp;&nbsp;{'}'};
</pre>
<h3>In render function</h3>
<pre>
    <code className="method">render()</code> {'{'}<br />
        &nbsp;&nbsp;<code className="keyword">return</code> (<code className="string">&lt;button className="sm-button green-500" onClick={'{'}</code><code className="method">(</code><code className="varible">event</code><code className="method">)</code> <code className="method">=></code> <code className="varible">this</code>.<code className="method">handleAddQuantityItem(</code><code className="varible">index</code>, <code className="varible">event</code>, <code className="varible">item.name</code><code className="method">)</code><code className="string">{'}'}&gt; + &lt;/button&gt;</code>);<br />
    {'}'}
</pre>

<h2>How to reload containers</h2>
<p>
    When you update your varible you also need to update your container to propagate the changes
</p>
<pre>
<code class="keyword">var</code> <code class="varible">idc</code> = <code class="string">'1234'</code>;<br />
<code class="keyword">var</code> <code class="varible">ids</code> = <code class="string">'1234'</code>;<br />
<code class="keyword">var</code> <code class="varible">options</code> = {'{'}<br />
&nbsp;&nbsp;<code class="varible">exclusions</code>: [<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<code class="string">"datastorage"</code>,<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<code class="string">"deduplication"</code>,<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<code class="string">"internalvars"</code>,<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<code class="string">"privacy"</code><br />
    &nbsp;&nbsp;]<br />
{'}'};<br /><br />
<code class="varible">wrapper</code>.<code class="method">reloadContainer</code>(<code class="varible">ids</code>, <code class="varible">idc</code>, <code class="varible">options</code>);<br /><br />
<code class="comment">{'// or you can reload all the containers'}</code><br />
<code class="varible">wrapper</code>.<code class="method">reloadAllContainers</code>(<code class="varible">options</code>);
</pre>
    </div>);
  }


export default Home;