import React from 'react'
import { MapPin, Smartphone, Mail } from 'react-feather'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import LeafletMap from '../components/LeafletMap'
import Layout from '../components/Layout'
import './ContactPage.css'

// Export Template for use in CMS preview
export const ContactPageTemplate = ({
  body,
  title,
  subtitle,
  featuredImage,
  address,
  phone,
  email,
  locations
}) => (
  <main className="Contact">
    <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />

    <section className="section Contact--Section1">
      <div className="container Contact--Section1--Container">
        <Content source={body} />
        <div className="Contact--Details">
          {address && (
            <a
              className="Contact--Details--Item"
              href={`https://www.google.co.il/maps/search/${encodeURI(
                address
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin /> {address}
            </a>
          )}
          {phone && (
            <a className="Contact--Details--Item" href={`tel:${phone}`}>
              <Smartphone /> {phone}
            </a>
          )}
          {email && (
            <a className="Contact--Details--Item" href={`mailto:${email}`}>
              <Mail /> {email}
            </a>
          )}
        </div>
      </div>
    </section>

    <LeafletMap
      position={[locations[0].lat, locations[0].lng]}
      zoom={17}
      markerText={"Hello"}
    />

  </main>
)

const ContactPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <ContactPageTemplate {...page.frontmatter} body={page.html} />
  </Layout>
)

export default ContactPage

export const pageQuery = graphql`
  query ContactPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        template
        subtitle
        featuredImage
        address
        phone
        email
        locations {
          mapLink
          lat
          lng
        }
      }
    }
  }
`
