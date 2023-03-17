import React, { useState } from "react";
// style={{marginTop: "100px"}}

const Photos = () => {
  let watch = new Date().toLocaleTimeString();
  const [time, setTime] = useState(watch);
  const show = () => {
    let update = new Date().toLocaleTimeString();
    setTime(update);
  };
  setInterval(show, 1000);
  return (
    <div style={{ marginTop: "100px" }}>
      <h1 className="text-center text-dark shadow p3">
        Welcome to my Photo Gellary
      </h1>
      {/* <h3 className='text-center text-dark'><BiAlarm/>  {time}</h3> */}
      <div className="container-fluid text-center">
        <div className="row">
          <div className="col">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div
                  className="card flip-card-front"
                  style={{ width: "15rem", height: "15px" }}
                >
                  <img
                    src="https://images.pexels.com/photos/5733079/pexels-photo-5733079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body"></div>
                </div>
                <div className="flip-card-back bg-light">
                  <div className="exp">
                    <a href="https://www.thrillophilia.com/historical-places-in-india#:~:text=Famous%20Historical%20Places%20in%20India,Elephanta%20Caves%2C%20and%20many%20more.">
                      Explore 👍
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div
                  className="card flip-card-front"
                  style={{ width: "15rem", height: "15px" }}
                >
                  <img
                    src="https://images.pexels.com/photos/1049298/pexels-photo-1049298.jpeg?auto=compress&cs=tinysrgb&w=600"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body"></div>
                </div>
                <div className="flip-card-back bg-light">
                  <div className="exp">
                    <a href="https://www.thrillophilia.com/guide-to-beaches-in-india">
                      Explore ❤️
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div
                  className="card flip-card-front"
                  style={{ width: "15rem", height: "15px" }}
                >
                  <img
                    src="https://images.pexels.com/photos/1247677/pexels-photo-1247677.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body"></div>
                </div>
                <div className="flip-card-back bg-light">
                  <div className="exp">
                    <a href="https://www.indiantravelstore.com/blog/famous-festivals-of-india">
                      Explore
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div
                  className="card flip-card-front"
                  style={{ width: "15rem", height: "15px" }}
                >
                  <img
                    src="https://images.pexels.com/photos/2570704/pexels-photo-2570704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Festivals</h5>
                  </div>
                </div>
                <div className="flip-card-back bg-light">
                  <div className="exp">
                    <a href="https://www.indiantravelstore.com/blog/famous-festivals-of-india">
                      Explore
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div
                  className="card flip-card-front"
                  style={{ width: "15rem", height: "15px" }}
                >
                  <img
                    src="https://images.pexels.com/photos/2853915/pexels-photo-2853915.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body"></div>
                </div>
                <div className="flip-card-back bg-light">
                  <div className="exp">
                    <a href="https://www.indiantravelstore.com/blog/famous-festivals-of-india">
                      Explore
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div
                  className="card flip-card-front"
                  style={{ width: "15rem", height: "15px" }}
                >
                  <img
                    src="https://images.pexels.com/photos/1211968/pexels-photo-1211968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body"></div>
                </div>
                <div className="flip-card-back bg-light">
                  <div className="exp">
                    <a href="https://www.indiantravelstore.com/blog/famous-festivals-of-india">
                      Explore
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div
                  className="card flip-card-front"
                  style={{ width: "15rem", height: "15px" }}
                >
                  <img
                    src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body"></div>
                </div>
                <div className="flip-card-back bg-light">
                  <div className="exp">
                    <a href="https://www.indiantravelstore.com/blog/famous-festivals-of-india">
                      Explore
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div
                  className="card flip-card-front"
                  style={{ width: "15rem", height: "15px" }}
                >
                  <img
                    src="https://images.pexels.com/photos/5538643/pexels-photo-5538643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body"></div>
                </div>
                <div className="flip-card-back bg-light">
                  <div className="exp">
                    <a href="https://www.indiantravelstore.com/blog/famous-festivals-of-india">
                      Explore
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div
                  className="card flip-card-front"
                  style={{ width: "15rem", height: "15px" }}
                >
                  <img
                    src="https://images.pexels.com/photos/8961065/pexels-photo-8961065.jpeg?auto=compress&cs=tinysrgb&w=600"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body"></div>
                </div>
                <div className="flip-card-back bg-light">
                  <div className="exp">
                    <a href="https://www.indiantravelstore.com/blog/famous-festivals-of-india">
                      Explore
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div
                  className="card flip-card-front"
                  style={{ width: "15rem", height: "15px" }}
                >
                  <img
                    src="https://images.pexels.com/photos/5329063/pexels-photo-5329063.jpeg?auto=compress&cs=tinysrgb&w=600"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body"></div>
                </div>
                <div className="flip-card-back bg-light">
                  <div className="exp">
                    <a href="https://www.indiantravelstore.com/blog/famous-festivals-of-india">
                      Explore
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div
                  className="card flip-card-front"
                  style={{ width: "15rem", height: "15px" }}
                >
                  <img
                    src="https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg?auto=compress&cs=tinysrgb&w=600"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body"></div>
                </div>
                <div className="flip-card-back bg-light">
                  <div className="exp">
                    <a href="https://www.indiantravelstore.com/blog/famous-festivals-of-india">
                      Explore
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div
                  className="card flip-card-front"
                  style={{ width: "15rem", height: "15px" }}
                >
                  <img
                    src="https://images.pexels.com/photos/12583557/pexels-photo-12583557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body"></div>
                </div>
                <div className="flip-card-back bg-light">
                  <div className="exp">
                    <a href="https://www.indiantravelstore.com/blog/famous-festivals-of-india">
                      Explore
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div
                  className="card flip-card-front"
                  style={{ width: "15rem", height: "15px" }}
                >
                  <img
                    src="https://images.pexels.com/photos/937465/pexels-photo-937465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body"></div>
                </div>
                <div className="flip-card-back bg-light">
                  <div className="exp">
                    <a href="https://www.indiantravelstore.com/blog/famous-festivals-of-india">
                      Explore
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div
                  className="card flip-card-front"
                  style={{ width: "15rem", height: "15px" }}
                >
                  <img
                    src="https://images.pexels.com/photos/6765585/pexels-photo-6765585.jpeg?auto=compress&cs=tinysrgb&w=600"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body"></div>
                </div>
                <div className="flip-card-back bg-light">
                  <div className="exp">
                    <a href="https://www.indiantravelstore.com/blog/famous-festivals-of-india">
                      Explore
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div
                  className="card flip-card-front"
                  style={{ width: "15rem", height: "15px" }}
                >
                  <img
                    src="https://images.pexels.com/photos/210156/pexels-photo-210156.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body"></div>
                </div>
                <div className="flip-card-back bg-light">
                  <div className="exp">
                    <a href="https://www.indiantravelstore.com/blog/famous-festivals-of-india">
                      Explore
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photos;
