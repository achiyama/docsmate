type ButtonProps = {
  buttonName: string
  onClick: () => void
}

export const Button = (params: ButtonProps) => {
  return (
    <>
      <button onClick={params.onClick} className="dt-btn">
        {params.buttonName}
      </button>
    </>
  )
}
