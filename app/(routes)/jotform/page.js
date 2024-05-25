import React from 'react'

const jotform = () => {
  return (
    <div>
      
    <iframe
      id="JotFormIFrame-241436216017044"
      title="Join Elixir community"
      onload="window.parent.scrollTo(0,0)"
      allowtransparency="true"
      allow="geolocation; microphone; camera; fullscreen"
      src="https://form.jotform.com/241436216017044"
      frameborder="0"
      style=
      {{minWidth:"100%",maxWidth:"100%",height:"100vh",border:"none"}}
      
    //   style="min-width:100%;max-width:100%;height:539px;border:none;"
    //   scrolling="no"
    >
    </iframe>
    <script src='https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js'></script>
    {/* <script>window.jotformEmbedHandler("iframe[id='JotFormIFrame-241436216017044']", "https://form.jotform.com/")</script> */}

    </div>
  )
}

export default jotform