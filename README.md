Images used in server.js after PoseNet detects 17 "keypoints":

<img width="1000" height="1000" alt="inbox_22824785_d3cdeb28a524f29414b4ca919df82bb7_download (1)" src="https://github.com/user-attachments/assets/bbac4cef-aea6-4ff5-9b7a-30a82d57cc68" />
<img width="2889" height="2889" alt="inbox_22824785_47804e44ef7d8dc3364139f3ae555a89_download" src="https://github.com/user-attachments/assets/c5616150-4f87-4762-92db-e361241f6e79" />

PoseNet detects 17 "keypoints"
1. A keypoint represents a pixel where a body part is detected in an image that is input into the model.
2. Each pixel is assigned an (X,Y) position based on the aspect ratio/dimensions of the input image.
3. A green dot is drawn over the (X,Y) position of the pixel where the body part is.
4. Use the (X,Y) position of the shoulder and elbow to form a right triangle and estimate the shoulder abduction angle of each pitcher.
5. For an accurate profile of the takeback, right-handed pitchers should be captured from first base, while left-handed pitchers should be captured from third base.
6. Flip the image as needed in your photo editor when comparing a lefty and righty.
7. To ensure an accurate comparison between pitchers of shoulder abduction/takeback, capture the image of each pitcher when their glove-hand arm is at maximum or near-maximum extension during the stride phase.

Realtime result of Pose Detection:



https://github.com/user-attachments/assets/f7d24805-b499-4b01-bc1b-f698a69030ba






Note:
- Chapman has a shoulder abduction angle of 29°. John Smoltz has a shoulder abduction angle of 76°.
- Smoltz extends his throwing hand backwards at a considerable distance farther from his torso during his takeback than Gausman and Chapman.
- John Smoltz has required 1 UCL Reconstruction in his career due to UCL injury, while Chapman and Gausman have never suffered UCL injury despite being hard-throwing veterans.
