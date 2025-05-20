import TopbarButton from './TopbarButton'

const BackButton = ({ visible = false }) => {
  const backNavigation = () => console.log('Clicked back button')

  return (
    <TopbarButton
      visible={visible}
      onclick={backNavigation}
    >
      &lt;~
    </TopbarButton>
  )
}

export default BackButton
