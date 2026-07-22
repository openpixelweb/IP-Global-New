import React from 'react'
import PageTitle from '../components/common/pageTitle'
import { teamData } from '../utlits/fackData/teamData'
import TeamCard from '../components/sections/teamCard'
import { ScrollRestoration } from 'react-router-dom'
import Title from '../components/common/title'

const Team = () => {
  return (
    <>
      <PageTitle link={"Our Team Members"} pageName={"Team Members"} />
      <div className="team-area pages-style pt-100 pb-75">
        <div className="container">
          <Title sectionName={"Our Team"} sectionTitle={"Meet Our Awesome Team Members."}/>

          <div className="row">
            {
              teamData.map(({ id, name, position, social_media, src }) => {
                return (
                  <div key={id} className="col-lg-3 col-sm-6">
                    <TeamCard id={id} name={name} position={position} social_media={social_media} src={src} style={"team-style"} />
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="bg-ellipse"></div>
      </div>
      <ScrollRestoration />
    </>
  )
}

export default Team