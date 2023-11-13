import { User, useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const Contact = () => {

  const{isAuthenticated, user} = useAuth0();

  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (<Wrapper>
              <h2 className="common-heading">Contact Page</h2>

              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2152.253796934739!2d89.17085438123658!3d24.875971308572407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc5964bd3fbd43%3A0xdcbb1b19b9c669a4!2sHanif%20enterprise!5e0!3m2!1sen!2sbd!4v1693199158377!5m2!1sen!2sbd" 
              width="100%" 
              height="400" 
              style={{border: 0}}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"></iframe>



              <div className="container">
                <div className="contact-form">
                  <form action="https://formspree.io/f/xrgwqvzp" method="post" className="contact-inputs">
                    <input type="text" placeholder="username" name="username" value={isAuthenticated ? user.name : ""} required autoComplete="off"/>
                    <input type="email" name="Email" placeholder="Email" value={isAuthenticated ? user.email : ""} required autoComplete="off" />
                    <textarea name="Message" placeholder="Enter your message" cols="30" rows="10"></textarea>
                    <input type="submit" value="Submit" />
                  </form>
                </div>
              </div>
          </Wrapper>);
};

export default Contact;
