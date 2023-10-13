import { nanoid } from 'nanoid'
import { setEmptyOrComa } from 'pages/Game/Info/helpers'

interface DevelopersProps {
  specifications: { name: string; platform?: { name: string } }[]
}

const Details = ({ specifications }: DevelopersProps) => {
  return (
    <span>
      {specifications &&
        specifications.map((specification, index) => (
          <span key={nanoid()}>
            {specification.name ? (
              <>
                {specification.name +
                  setEmptyOrComa(index, specifications as [])}
              </>
            ) : (
              <>
                {(specification.platform?.name ?? '') +
                  setEmptyOrComa(index, specifications as [])}
              </>
            )}
          </span>
        ))}
    </span>
  )
}

export default Details
