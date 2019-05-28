import '../style/app.sass'
import Title from './tags/Title.imba'
console.log ("using imba")

let width = 300
let height = 200

tag App
  def render
    <self>
      <Title>
      <img src="http://placekitten.com/{width}/{height}">
Imba.mount <App>
