import React from 'react'
import Uno from './assets/poly.glb'

export default function AR() {
  return (
    <model-viewer className="center-block" bounds="tight" enable-pan src={Uno} ar ar-modes="scene-viewer webxr quick-look" camera-controls poster="poster.jpeg" shadow-intensity="2" exposure="1.19" auto-rotate>
    <div className="progress-bar hide" slot="progress-bar">
        <div className="update-bar"></div>
    </div>
    <button slot="ar-button" id="ar-button">
        Prueba en tu entorno
    </button>
    
    <div id="ar-prompt">
        <img src="https://modelviewer.dev/shared-assets/icons/hand.png"/>
    </div>
    <button id="ar-failure">
    AR is not tracking!
  </button>
</model-viewer>
  )
}
