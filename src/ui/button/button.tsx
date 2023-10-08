export const Button = ({ url: string }) => {
  return (
    <div>
      <h1>Button</h1>
      <button onClick={() => console.log("clicked")}>Click me</button>
    </div>
  )
}
