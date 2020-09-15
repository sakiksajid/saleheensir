import React from "react"
import { shape, ProfileType } from "../../types"

const Summary = ({ profile }) => (
  <div className="flex pb-8">
    <div className="w-1/2 pr-4 lg:pr-12 border-r border-line">
      <h5 className="font-header font-semibold text-front text-sm uppercase">
        University
      </h5>
      <h3 className="font-header font-light text-2xl text-front leading-tight">
        {profile.company}
      </h3>
      {profile.for_hire && (
        <div className="font-header font-semibold text-xs uppercase pt-2">
          <span className="inline-block w-2 h-2 rounded-full mr-1 bg-green-500"></span>
          Available for hire
        </div>
      )}
    </div>
    <div className="w-1/2 pl-4 lg:pl-12">
      <h5 className="font-header font-semibold text-front text-sm uppercase">
        Focused on
      </h5>
      <div className="font-header font-light text-2xl text-front leading-tight">
        {profile.focus}
      </div>
    </div>
  </div>
)

Summary.propTypes = {
  profile: shape(ProfileType),
}

export default Summary
