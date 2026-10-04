import test, { expect } from "@playwright/test";

// You can declare a group of tests with a title. 
// The title will be visible in the test report as a part of each test's title
test.describe("@Lead Module", () => {
    // testcase 1: create lead
    test("Create Lead", {
        annotation: {
            type: "Requriement",
            description: "USID 8755 4352"
        }, tag: "@CreateLead"

    }, async () => {
        test.step("Lead is Created as expected", () => {
            console.log("Lead is created Successfully here");
        })

    })
    // testcase 2: edit lead
    test.skip("Edit Lead", async () => {
        console.log("Lead is edited Successfully here");
    })
    // testcase 3: duplicate lead
    test.fixme("Duplicate Lead", async () => {
        console.log("Lead is Duplicated Successfully here");
    })
    // testcase 4: delete lead
    test.fail("Delete Lead", async () => {
        // Marks a test as "should fail". Playwright runs this test and ensures that it is actually failing. 
        // This is useful for documentation purposes to acknowledge that some functionality is broken until it is fixed.    
        expect(4).toBe(3)
        console.log("Lead is Deleted Successfully here");
    })
    // testcase 5: merge lead
    test("Merge Lead", async () => {
        console.log("Lead is merged Successfully here");
    })

})