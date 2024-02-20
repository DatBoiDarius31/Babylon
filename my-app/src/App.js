import { ActionManager, SetValueAction } from '@babylonjs/core/Actions'
import { Color3 } from '@babylonjs/core/Maths/math.color'
import { Vector3 } from '@babylonjs/core/Maths/math.vector'
import '@babylonjs/loaders';
// import "@babylonjs/inspector";
import React, { Suspense, useState } from 'react'
import { Engine, Model, Scene } from 'react-babylonjs'


const WithModel = () => {
  const [modelYPos, setmodelYPos] = useState(2)
  const [modelScaling, setmodelScaling] = useState(3)
  console.log('rendering', modelScaling)
const [modelLength, setmodelLength] = useState(30);
  const BaseScale = new Vector3(30, 30, modelLength);

  const shorten = () => {
    setmodelLength(modelLength - 10)
  }
    const lengthen = () => {
      setmodelLength(modelLength + 10)
    }
  
  
  let baseUrl =
    '    https://raw.githubusercontent.com/DatBoiDarius31/Babylon/main/'


  return (
    <>
      
    
        <div>
          <button onClick={shorten}>Short</button>
          <button onClick={lengthen}>Long</button>
          <Engine antialias adaptToDeviceRatio canvasId="babylon-js">
            <Scene clearColor={Color3.White()}>
            
              <arcRotateCamera
                name="camera1"
                alpha={Math.PI / 2}
                beta={Math.PI / 2}
                radius={9.0}
                target={Vector3.Zero()}
                minZ={0.001}
              />
              <hemisphericLight
                name="light1"
                intensity={0.7}
                direction={Vector3.Up()}
              />

             

              <Suspense
                fallback={
                  <box
                    name="fallback"
                    position={new Vector3(-2.5, modelYPos, 0)}
                  />
                }
              >
                <Model
                  name="model"
                  rootUrl={`${baseUrl}`}
                  sceneFilename="F1022-00110354_02.glb"
                  scaling={BaseScale}
                  position={new Vector3(0, 1, 0)}
                >
                  
                 
              </Model>

            
              <directionalLight name="shadow-light" setDirectionToTarget={[Vector3.Zero()]} position={new Vector3(0, 30, -10)} direction={Vector3.Zero()} intensity={0.3} shadowMinZ={1} shadowMaxZ={2500} shadowOrthoScale={2.0} />

             
          

              </Suspense>
            </Scene>
          </Engine>
        </div>
    </>
  )
}
const App = () => (
  <div style={{ flex: 1, display: 'flex' }}>
    <WithModel />
  </div>
)
export default App