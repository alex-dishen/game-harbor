import { v4 as uuidv4 } from 'uuid'
import { setEmptyOrComa } from 'pages/Game/Info/helpers'

interface DevelopersProps {
  specifications: { name: string; platform?: { name: string } }[]
}

const Details = ({ specifications }: DevelopersProps) => {
  return (
    <span>
      {specifications &&
        specifications.map((specification, index) => (
          <span key={uuidv4()}>
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
