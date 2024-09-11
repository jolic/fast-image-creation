import React from 'react'
import OriginalImages from '../Components/OriginalImages/OriginalImages'
import Canvas from "../Components/Canvas/Canvas"
import ChromePicker  from 'react-color'
import Layer1 from '../assets/Layer1.bmp'
import Layer2 from '../assets/Layer2.bmp'

const canvasForTask2 = document.createElement('canvas')
const contextForTask2 = canvasForTask2.getContext('2d')
let contextForDrawA = null
let contextForDrawB = null
let contextForDrawTask2 = null
let contextForDrawTask3 = null
let contextForDrawTask4 = null

function Task1() {
    const [imageAisReady, setImageAisReady] = React.useState(false)
    const [imageBisReady, setImageBisReady] = React.useState(false)
    const [sliderValue, setSliderValue] = React.useState(1)
    const [colorValue, setColorValue] = React.useState('#ff0000')

    const drawA = (context) => {
        const width = context.canvas.width
        const height = context.canvas.height
        const green = [112, 173, 71] // search for the green color in the imageA
        context.clearRect(0, 0, width, height)
        const image = new Image()
        image.src = Layer1
        image.onload = function(){
            context.drawImage(image, 0, 0)
            const imageData = context.getImageData(0, 0, width, height)
            for (let i = 0; i < imageData.data.length; i += 4) {
                if (imageData.data[i] === green[0] && imageData.data[i+1] === green[1] && imageData.data[i+2] === green[2]) {
                    imageData.data[i+3] = 0 // alpha
                }
            }
            context.putImageData(imageData, 0, 0)
            contextForDrawA = context
            // contextForTask2.putImageData(imageData, 0, 0)
            setTimeout(() => {
                contextForTask2.drawImage(context.canvas, 0, 0)
            }, 100)

            // setImageAisReady(true)
        }
    }
    
    const drawB = (context) => {
        const width = context.canvas.width
        const height = context.canvas.height
        const green = [112, 173, 71] // search for the green color
        const blue = [143, 170, 220] // search for the blue color
        context.clearRect(0, 0, width, height)
        const image = new Image()
        image.src = Layer2
        image.onload = function(){
            context.drawImage(image, 0, 0)
            const imageData = context.getImageData(0, 0, width, height)
            for (let i = 0; i < imageData.data.length; i += 4) {
                if (imageData.data[i] === green[0] && imageData.data[i+1] === green[1] && imageData.data[i+2] === green[2]) {
                    imageData.data[i+3] = 0 // alpha
                }
                if (imageData.data[i] === blue[0] && imageData.data[i+1] === blue[1] && imageData.data[i+2] === blue[2]) {
                    imageData.data[i] = 255
                    imageData.data[i+1] = 255
                    imageData.data[i+2] = 255
                    // imageData.data[i+3] = 0
                }
            }
            context.putImageData(imageData, 0, 0)
            contextForDrawB = context
            setTimeout(() => {
                contextForTask2.drawImage(context.canvas, 0, 0)
            }, 100)
            // setImageBisReady(true)
        }
    }

    const drawTask2 = (context) => {
        contextForDrawTask2 = context
    }

    const onClickCombine = e => {
        const drawA = document.getElementById('drawA')
        const drawB = document.getElementById('drawB')
        contextForDrawTask2.drawImage(drawB, 0, 0)
        contextForDrawTask2.drawImage(drawA, 0, 0)
    }

    const drawTask3 = (context) => {
        contextForDrawTask3 = context
    }

    const onClickTask3 = e => {
        const drawA = document.getElementById('drawA')
        const drawB = document.getElementById('drawB')
        contextForDrawTask3.drawImage(drawB, 0, 0)
        contextForDrawTask3.drawImage(drawA, 0, 0)
        // draw lines
        contextForDrawTask3.beginPath()
        contextForDrawTask3.moveTo(115, 0)
        contextForDrawTask3.lineTo(231, 115)
        contextForDrawTask3.lineTo(115, 231)
        contextForDrawTask3.lineTo(0, 115)
        contextForDrawTask3.lineTo(115, 0)
        // innen
        const offset = 22
        contextForDrawTask3.moveTo(115, offset)
        contextForDrawTask3.lineTo(231-offset, 115)
        contextForDrawTask3.lineTo(115, 231-offset)
        contextForDrawTask3.lineTo(offset, 115)
        contextForDrawTask3.lineTo(115, offset)
        // Kreis
        contextForDrawTask3.moveTo(155, 115)
        contextForDrawTask3.arc(115, 115, 40, 0, 2 * Math.PI)

        contextForDrawTask3.lineWidth = sliderValue
        contextForDrawTask3.strokeStyle = colorValue
        contextForDrawTask3.stroke()

    }

    const drawTask4 = (context) => {
        contextForDrawTask4 = context
    }
    
    const onClickTask4 = e => {
        const drawD = document.getElementById('drawD')
        contextForDrawTask4.filter = 'grayscale(1)'
        contextForDrawTask4.drawImage(drawD, 0, 0)
    }

    const handleColorChange = (color) => {
        setColorValue(color.hex)
        onClickTask3()
    }

    return (
        <div>
            <div className="grid grid-cols-2 gap-4">
                <h2 className='col-span-2'>Original</h2>
                <div>
                    <img src={Layer1} alt="Layer 1" />
                </div>
                <div>
                    <img src={Layer2} alt="Layer 2" />
                </div>
            </div>
            
            <h2>Task 1</h2>
            <h3 className='my-8'>Convert these 2 images using the following rules</h3>
            <ul className='ml-6'>
                <li>Keep all black or white pixels</li>
                <li>Green should become fully transparent</li>
                <li>Blue should become white</li>
            </ul>
            <div className="grid grid-cols-2 gap-4 my-8">
                <div>
                    <Canvas id="drawA" draw={drawA} width="231" height="231" />
                </div>
                <div>
                    <Canvas id="drawB" draw={drawB} width="231" height="231" />
                </div>
            </div>

            <h2>Task 2</h2>
            <h3 className='my-8'>Combine both images to one.</h3>
            <div className="grid grid-cols-2 gap-4 my-8">
                <div>
                    <button onClick={onClickCombine} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Combine</button>
                </div>
                <div>
                    <Canvas id="drawC" draw={drawTask2} width="231" height="231" />
                </div>
            </div>

            <h2>Task 3</h2>
            <h3 className='my-8'>Now find all black areas and draw a red line of 1 pixel thickness around them.</h3>
            <div className="grid grid-cols-2 gap-4 my-8">
                <div>
                    <button onClick={onClickTask3} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Draw line</button>
                    <div>
                        <label
                            htmlFor="customRange3"
                            className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
                        >
                        Line thickness: 1px
                        </label>
                        <div>
                        Line thickness: {sliderValue} px
                        </div>
                        <input
                            type="range"
                            className="transparent h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-blue-200"
                            min="0"
                            max="20"
                            step="1"
                            value={sliderValue}
                            onChange={(e) => {
                                setSliderValue(e.target.value)
                                onClickTask3()
                            }}
                            id="customRange3"
                        />
                        <div className='mt-4'>Color <ChromePicker color={colorValue} onChange={handleColorChange}/></div>
                    </div>
                </div>
                <div>
                    <Canvas id="drawD" draw={drawTask3} width="231" height="231" />
                </div>
            </div>

            <h2>Task 4</h2>
            <h3 className='my-8'>Store the result into a 8bit Grayscale image. You can freely choose any image format you are comfortable with.</h3>
            <div className="grid grid-cols-2 gap-4 my-8">
                <div>
                    <button onClick={onClickTask4} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Transform</button>
                </div>
                <div>
                    <Canvas id="drawE" draw={drawTask4} width="231" height="231" />
                </div>
            </div>


        </div>
    );
}


export default Task1