import Navigation from "@components/common/navigation"
import OnboardModal from "@components/modals/modal-onboard"
import Notification from "@components/notification"

import { GetInfoForUserQuery as UserInfo } from '@logic/graphql'
import { useState } from "react"

type Props = {
  user: UserInfo["user"]
  children: React.ReactElement
}

export default function Dashboard({ user, children }: Props) {

  const [onboard, setOnboard] = useState(user.profiles.length == 0)
  const [notification, setNotification] = useState(false)

  const renderNotification = () => {
    if (notification) {
      return (
        <div className='absolute top-0 left-0 bottom-0 bg-white border-r border-gray-200 w-3/12'>
          <Notification />
        </div>
      )
    } else {
      return null
    }
  }

  return (
    <div className='absolute h-full w-full left-0 top-0 flex flex-col'>
      <Navigation notification={notification} onNotification={() => setNotification(p => !p)} />
      <div className='relative flex-grow overflow-y-hidden'>
        {children}
        {renderNotification()}
      </div>
      <OnboardModal shows={onboard} onLater={() => setOnboard(false)} />
    </div>
  )
}
