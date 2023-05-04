// importing components
import Navbar from "@/components/Navbar/Navbar";
import Container from "@mui/material/Container";
import Footer from "@/components/Footer/Footer";
import { Grid } from "@mui/material";

// Home component
export default function Home() {
  return (
    <Container maxWidth="lg">
      <div className="homepage bg-yellow-200 min-h-screen">
        <div className="homepage__navbar">
          <Navbar />
        </div>

        <div className="homepage__intro">
          <Grid container spacing={2}>
            <Grid xs={12} md={6}>
              <div className="homepage__intro__content bg-red-300">Content</div>
            </Grid>

            <Grid xs={12} md={6}>
              <div className="homepage__intro__illustration bg-blue-300">
                Content
              </div>
            </Grid>
          </Grid>
        </div>

        <div className="homepage__footer">
          <Footer />
        </div>
      </div>
    </Container>
  );
}
